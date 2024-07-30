import { useEffect, useState } from "react";

const EachCard = ({ ReadingName, Data, Time, Date }) => {
    class SeverityBoundaries {
        constructor(first, second, third, fourth) {
            this.first = first
            this.second = second
            this.third = third
            this.fourth = fourth
        }
        isWithinFirstArea(reading) {
            if (reading < this.first)
                return true
            return false
        }
        isWithinSecondArea(reading) {
            if ((reading >= this.first && reading < this.second))
                return true
            return false
        }
        isWithinThirdArea(reading) {
            if ((reading >= this.second && reading < this.third))
                return true
            return false
        }
        isWithinFourthArea(reading) {
            if (reading >= this.third && reading <= this.fourth)
                return true
            return false
        }
        isWithinFifthArea(reading) {
            if (reading > this.fourth)
                return true
            return false
        }
    }
    function getTextClassNameByReadingSeverity(readingSeverity) {
        if (readingSeverity == "danger")
            return ("text-danger")
        else if (readingSeverity == "warning")
            return ("text-warning")
        else
            return ("text-primary")
    }
    function getReadingBoundaries() {
        if (ReadingName.includes("PH")) {
            return new SeverityBoundaries(3, 6.5, 8.5, 11)
        }
        else if (ReadingName.includes("Hardness")) {
            return new SeverityBoundaries(112, 180, 240, 285)
        }
        else if (ReadingName.includes("Solids")) {
            return new SeverityBoundaries(8000, 15000.19, 30774, 47000)
        }
        else if (ReadingName.includes("Chloramines")) {
            return new SeverityBoundaries(3, 5.46, 9.92, 11)
        }
        else if (ReadingName.includes("Sulfate")) {
            return new SeverityBoundaries(283, 305.02, 380, 420)
        }
        else if (ReadingName.includes("Conductivity")) {
            return new SeverityBoundaries(273.5, 350, 524.6, 620)
        }
        else if (ReadingName.includes("Organic_carbon")) {
            return new SeverityBoundaries(7.2, 10.03, 17.86, 22.5)
        }
        else if (ReadingName.includes("Trihalomethanes")) {
            return new SeverityBoundaries(28.3, 50.04, 87.02, 100)
        }
        else if (ReadingName.includes("Turbidity")) {
            return new SeverityBoundaries(2.45, 3.04, 4.62, 5.62)
        }
    }
    function getReadingNameClassList() {
        var readingSeverity = getReadingSeverity()
        var readingNameClassList = []
        var colorClassName = getTextClassNameByReadingSeverity(readingSeverity)
        readingNameClassList.push(colorClassName)
        return readingNameClassList
    }
    function getReadingValueClassList() {
        var readingSeverity = getReadingSeverity()
        var readingValueClassList = []
        var colorClassName = getTextClassNameByReadingSeverity(readingSeverity)
        readingValueClassList.push(colorClassName)
        return readingValueClassList
    }
    function getReadingSeverity() {
        let severityLimits = getReadingBoundaries()
        var readingSeverity = null
        if (severityLimits.isWithinFirstArea(Data)) {
            readingSeverity = "danger"
        }
        else if (severityLimits.isWithinSecondArea(Data)) {
            readingSeverity = "warning"
        }
        else if (severityLimits.isWithinThirdArea(Data)) {
            readingSeverity = "normal"
        }
        else if (severityLimits.isWithinFourthArea(Data)) {
            readingSeverity = "warning"
        }
        else if (severityLimits.isWithinFifthArea(Data)) {
            readingSeverity = "danger"
        }
        return readingSeverity

    }
    function getProgressBarWidth() {
        let severityLimits = getReadingBoundaries()
        let progressBarWidthClassName = null

        if (severityLimits.isWithinSecondArea(Data)) {
            progressBarWidthClassName = 'w-25'
        }
        else if (severityLimits.isWithinThirdArea(Data)) {
            progressBarWidthClassName = 'w-50'
        }
        else if (severityLimits.isWithinFourthArea(Data)) {
            progressBarWidthClassName = 'w-75'
        }
        else if (severityLimits.isWithinFifthArea(Data)) {
            progressBarWidthClassName = 'w-100'
        }
        return progressBarWidthClassName
    }
    function getProgressBarClassList() {
        var readingSeverity = getReadingSeverity()
        var progressBarClassList = []
        if (readingSeverity == "normal") {
            progressBarClassList.push(`bg-primary`)
        }
        else
            progressBarClassList.push(`bg-${readingSeverity}`)
        progressBarClassList.push(getProgressBarWidth())
        return progressBarClassList
    }
    function getStatusMessageClassList() {
        var readingSeverity = getReadingSeverity()
        var statusMessageClassList = []
        var colorClassName = getTextClassNameByReadingSeverity(readingSeverity)
        statusMessageClassList.push(colorClassName)
        return statusMessageClassList
    }
    function getCardClassList() {
        var readingSeverity = getReadingSeverity()
        var CardClassList = []
        CardClassList.push("border", "border-2", `border-${readingSeverity}`, "rounded")
        return CardClassList
    }
    return (
        <>
            <div class="card shadow-lg text-center">
                <div class={getCardClassList().join(" ") + " " + "card-body "} >
                    <div className="row ">
                        <h6 className="col-5 text-secondary">Time : {Time}</h6>

                        <h6 className="col text-secondary">
                            Date : {Date}</h6>
                    </div>
                    <h4 className={getReadingNameClassList() + " " + "card-title  col"}>{ReadingName}</h4>
                    <h1 class={getReadingValueClassList() + " " + "fs-2"}>{Data}</h1>
                    <div class="progress">
                        <div class={getProgressBarClassList().join(" ") + " " + "progress-bar"} role="progressbar" ></div>
                    </div>
                    <h5 className={getStatusMessageClassList()}>{getReadingSeverity().charAt(0).toUpperCase() + getReadingSeverity().slice(1) + "  " + "Reading"} </h5>

                </div>
            </div >
        </>)
}
export default EachCard