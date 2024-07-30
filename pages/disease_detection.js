import DiseasesList from "../components/disease_detection/diseases_list";
import MainNavBar from "../components/navbar";
import Link from "next/link";
import useFetch from "../useFetch";
import { use, useEffect, useState } from "react";
import Image from "next/image";



function DiseaseDetection() {
    const [detectedDisease, setDetectedDisease] = useState([], null)
    const [plantName, setPlantName] = useState(null)
    const [statusMessage, setStatusMessage] = useState(null)
    const [predictionBorder, setpredictionBorder] = useState(null)
    const [predictionTextColor, setPredictionTextColor] = useState(null)
    const [iconClassName, setIconClassName] = useState(null)
    var getImageSrc = function (event) {
        var image = document.getElementById("plantImage");
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    function splitByUnderscore(sentence) {
        var splittedSentence = sentence.split("_")
        return splittedSentence
    }
    const handleDetection = async () => {
        var imagePath = document.getElementById("plantFile").value
        console.log(imagePath)
        const rawPromise = await fetch("http://127.0.0.1:8000/api/v1/PDVGG16/predict", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imagePath),

        })
        let data = await rawPromise.json();
        let splittedData = splitByUnderscore(data.label[0])
        setPlantName(splittedData[0])
        setDetectedDisease(splittedData.slice(1, splittedData.length).join(" "))
        if (data.label[0].includes("healthy") == false) {
            console.log(data.label[0])
            setStatusMessage("Disease Detected     ")
            setpredictionBorder("border-danger")
            setPredictionTextColor("text-danger")
            setIconClassName("fa-solid fa-xmark text-danger fa-xl")
        }
        else {
            setStatusMessage("No Disease Found  ")
            setpredictionBorder("border-primary")
            setPredictionTextColor("text-primary")
            setIconClassName("fa-solid fa-check  text-primary fa-xl")
        }
    }
    return (
        <>
            <div class="h-25 bg-success position-absolute w-100"></div>
            <MainNavBar></MainNavBar>

            <div class="container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div class="card container-fluid  bg-light shadow-lg">
                        <div class="card-body ">
                            <input type="file" id="plantFile" onChange={getImageSrc} class="pb-3 card-img-top" />
                            <div>
                                <img id="plantImage" class="w-100 h-100 " />
                                {
                                    <div>
                                        <h3 className={predictionTextColor + " " + "text-center p-2 border-left border-2 "}>{statusMessage}
                                            <i className={iconClassName}></i>
                                        </h3>
                                        <div className={predictionBorder + " " + predictionTextColor + " " + " mt-3 text-center p-2 border border-2 "}>
                                            <h3 className="text-capitalize " >{plantName}</h3>
                                            <hr></hr>
                                            <h3 className="text-capitalize">{detectedDisease} </h3>
                                        </div>
                                    </div>
                                }
                                <button onClick={handleDetection} class="btn container-fluid btn-success btn-lg w-100 mt-3 mb-0">
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DiseaseDetection;
