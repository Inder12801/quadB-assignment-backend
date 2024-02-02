import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import './Fetch.css';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "last", type: "number", headerName: "Last", width: 130 },
    { field: "buy", type: "number", headerName: "Buy", width: 130 },
    { field: "sell", type: "number", headerName: "Sell", width: 130 },
    { field: "volume", type: "number", headerName: "Volume", width: 130 },
    { field: "base_unit", headerName: "base_unit", width: 130 },
];

function Fetch({ Backend_URL }: any) {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(Backend_URL+"/QuadBAPI/data");
            const responseJson = await response.json();
            responseJson.forEach((elem: any, index: number) => {
                elem.id = index;
            });
            setData(responseJson);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        fetchData();

    }, [])


    return (
        <div className="fetch">
            <h2>Data</h2>
            <div style={{ height: 400, width: "fit-content",  maxWidth:"1000px"}}>
                <DataGrid rows={data} columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[0, 10]} />
            </div>
        </div>
    )
}

export default Fetch