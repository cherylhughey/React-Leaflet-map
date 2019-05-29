const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 38.6314054,
      lng: -90.1932178,
      zoom: 13 };
  
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      React.createElement(LeafletMap, { center: position, zoom: this.state.zoom },
      React.createElement(TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png" }),

      React.createElement(Marker, { position: position },
      React.createElement(Popup, null, "Geodata IT",
      React.createElement("br", null), " 911 Washington Ave., Ste. 737",
      React.createElement("br", null), " St. Louis, Missouri 63101",
      React.createElement("br", null), " 1-866-229-8606"))));




  }}



ReactDOM.render(React.createElement(SimpleExample, null), document.getElementById('container'));
