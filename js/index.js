const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet;

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 38.6314054,
      lng: -90.1932178,
      zoom: 13 };

  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      React.createElement(LeafletMap, { center: position, zoom: this.state.zoom },
      React.createElement(TileLayer, {
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
        url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png" }),

      React.createElement(Marker, { position: position },
      React.createElement(Popup, null, "A pretty CSS3 popup. ",
      React.createElement("br", null), " Easily customizable."))));




  }}



ReactDOM.render(React.createElement(SimpleExample, null), document.getElementById('container'));