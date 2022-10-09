import React, {useState, useEffect} from 'react'

const FetchApp:React.FC = () => {
    const BASE_URL = process.env.DOG_API_URL || 'https://dog.ceo/api/breeds/image/random'

    const [apiData, setApiData] = useState()
    const [isError, setIsError] = useState('')

    useEffect(() => {
        const fetchApiData = async() => {
            try {
                const data = await (await fetch(BASE_URL)).json()
                setApiData(() => data.message)
                // console.log(apiData)
            } catch (error) {
                setIsError(() => error as string)
            }
        }
        fetchApiData()
    }, [BASE_URL])

    return (
        <section>
            <div>
                Today's dog is...
            </div>
                {!isError ?
                <div>
                    <img src={apiData} alt="dog api response"/>
                </div>
                :
                <div>  
                    {isError}
                </div>
                }
        </section>
    )
}

export default FetchApp