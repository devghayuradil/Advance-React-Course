function MapFunction(props) {

    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories <= 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <li> {dessert.name} - {dessert.calories} cal</li>
            );
        });
    return (
        <div className="map-function">
            <h2>Fruits List:</h2>
            <ul>
                {lowCaloriesDesserts}
            </ul>
        </div>
    );
}

export default MapFunction;