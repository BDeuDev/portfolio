import { useEffect, useState } from "react"
import React from "react"
import axios, { AxiosResponse, AxiosError } from 'axios';

function Proyecto() {
    interface ApiResponse {
        data: any;
        id: any
        languages_url: any
    }

    interface ApiError {
        message: string;
    }
    const [name, setName] = useState(null)
    const [languages, setLanguages] = useState<string[]>([]);
    const [languagesPercent,setLanguagesPercent] = useState<any>([])
    const accessToken = {}//Generar token nuevp
    const username = 'BDeuDev';
    const repositoryName = 'Leadergym';
    const apiUrl = `https://api.github.com/repos/${username}/${repositoryName}`;
    const headers = {
        Authorization: `token ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json', // Utiliza la versión 3 de la API
    };
    useEffect(() => {
        axios.get<any>(apiUrl, { headers })
            .then((response: AxiosResponse<any>) => {
                const url = response.data.languages_url;
                setName(response.data.name)
                axios.get(url, { headers })
                    .then((languagesResponse: AxiosResponse<any>) => {
                        const languagesArray = Object.keys(languagesResponse.data);
                        const languagesArray2 = Object.values(languagesResponse.data)
                        
                        setLanguages(languagesArray);
                        setLanguagesPercent(languagesArray2) 
                    })

                    .catch((languagesError: AxiosError<ApiError>) => {
                        console.error('Error al obtener la información de los lenguajes:', languagesError.response?.data.message);
                    });
            })
            .catch((error: AxiosError<ApiError>) => {
                console.error('Error al realizar la solicitud:', error.response?.data.message);
            });
    }, []);
    return (
        <>  
                <div>
                    <h2 className="text-xl">{name}</h2>
                    <ul>
                        {languages.map((language, index) => (
                            <li className="text-white" key={index}>{language}</li>
                            
                        ))}
                        {/* <li className="text-white" key={index}>{}</li> */}
                    </ul>

                </div>
            

        </>
    )
}
export default Proyecto
