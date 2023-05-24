import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://192.168.177.96:8000/',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function getcadexperience() {
    return ApiService.get('cad_exeperience/')
    .then(res => {
        return res.data
    })
}

export function addcadexperience(cadExperiences) {
    return ApiService.post('cad_exeperience/', 
    {
        'cadexperience_id': null,
        'cadexperience_first_name': cadExperiences.cadexperience_first_name.value,
        'cadexperience_last_name': cadExperiences.cadexperience_last_name.value,
        'cadexperience_degree': cadExperiences.cadexperience_degree.value,
    })
    .then(res => {
        return res.data
    })
}