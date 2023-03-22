function MapFunction() {
    const data = [
        {
            id: "1",
            title: "Tiramisu",
            price: "500"

        },
        {
            id: "2",
            title: "lemon Ice Creame",
            price: "400"

        },
        {
            id: "3",
            title: "Chocolate mousse",
            price: "900"

        }
    ];

    const fruitsData = data.filter((data)=>{
        if (data.price <= 500) {
            return data;
        }
    }).map((data)=>{
        return <li> {data.title} - {data.price} </li>;
    })
    return (
        <div className="map-function">
            <h2>Fruits List:</h2>
            <ul>
                {fruitsData}
            </ul>
        </div>
    );
}

export default MapFunction;