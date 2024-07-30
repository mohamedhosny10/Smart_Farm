import useFetch from '../../useFetch';
function DiseasesList({id}) {
  const { data: disease, error, isPending } = useFetch('http://localhost:8000/disease/' + id);

  return (<>
    <div class="card">
      {isPending && <div>Loading.... </div>}
      {error && <div>{error}</div>}
      {disease && (
        <div class="card-body p-3">
          <div class="numbers">
            <p class="text-m mb-3 border border-3 text-uppercase font-weight-bold">{disease.name}</p>
          </div>
        </div>
      )}
    </div>
  </>
  )
}
export default DiseasesList;