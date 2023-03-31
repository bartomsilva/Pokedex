import axios from "axios";

export function loadData(url, setState) {

    (async () => {

        try {
            const response = await axios.get(url)
            setState(response.data.results);
        }
        catch (error) {
            console.log("ocorreu um erro: " + error);
        };
    })()

}

