import GoogleMapReact from "google-map-react";

const Map = ({center,zoom}) => {
    return (
        <div className = "map">
            <GoogleMapReact
                boostrapURLKEYS = {{key:
                'AIzaSyA9UWd9VhJWq_XuCcyMmOFGujOcU1rLSI8'}}
                defaultCenter = { center }
                defualtZoom = {zoom}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defualtProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map