import "../../assets/css/section-3.css";
import MapImage from "../../assets/img/bando.png";
import tour1 from "../../assets/img/cardtour.png";
import tour2 from "../../assets/img/cardtour2.png";
import tour3 from "../../assets/img/cardtour3.png";
import tour4 from "../../assets/img/cardtour4.png";
import tour5 from "../../assets/img/cardtour5.png";
import icon1 from "../../assets/img/house.png";
import icon2 from "../../assets/img/car.png";
import icon3 from "../../assets/img/tour.png";
import icon4 from "../../assets/img/bus.png";

const Section3 = () => {
  const tourDestinations = [
    {
      id: 1,
      name: "Ha Giang Loop tour: ",
      day: "Itinerary in 4 Days 5 Nights",
      time: "4 Days 5 Nights",
      address: "Accomodation: ",
      room: "Phòng Doom",
      bike: "Motorbike: ",
      xe: "Xe Wave, Vision",
      tourguid: "Tour guide",
      transport: "Transport: ",
      oto: "Xe VIP, có trung chuyển",
      money: "$199",
      description: "Description 1",
      img: tour1,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
    },
    {
      id: 2,
      name: "Ha Giang Loop tour: ",
      day: "Itinerary in 4 Days 5 Nights",
      time: "4 Days 5 Nights",
      address: "Accomodation: ",
      room: "Phòng Doom",
      bike: "Motorbike: ",
      xe: "Xe Wave, Vision",
      tourguid: "Tour guide",
      transport: "Transport: ",
      oto: "Xe VIP, có trung chuyển",
      money: "$199",
      description: "Description 1",
      img: tour2,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
    },
    {
      id: 3,
      name: "Ha Giang Loop tour: ",
      day: "Itinerary in 4 Days 5 Nights",
      time: "4 Days 5 Nights",
      address: "Accomodation: ",
      room: "Phòng Doom",
      bike: "Motorbike: ",
      xe: "Xe Wave, Vision",
      tourguid: "Tour guide",
      transport: "Transport: ",
      oto: "Xe VIP, có trung chuyển",
      money: "$199",
      description: "Description 1",
      img: tour3,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
    },
    {
      id: 4,
      name: "Ha Giang Loop tour: ",
      day: "Itinerary in 4 Days 5 Nights",
      time: "4 Days 5 Nights",
      address: "Accomodation: ",
      room: "Phòng Doom",
      bike: "Motorbike: ",
      xe: "Xe Wave, Vision",
      tourguid: "Tour guide",
      transport: "Transport: ",
      oto: "Xe VIP, có trung chuyển",
      money: "$199",
      description: "Description 1",
      img: tour4,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
    },
    {
      id: 5,
      name: "Ha Giang Loop tour: ",
      day: "Itinerary in 4 Days 5 Nights",
      time: "4 Days 5 Nights",
      address: "Accomodation: ",
      room: "Phòng Doom",
      bike: "Motorbike: ",
      xe: "Xe Wave, Vision",
      tourguid: "Tour guide",
      transport: "Transport: ",
      oto: "Xe VIP, có trung chuyển",
      money: "$199",
      description: "Description 1",
      img: tour5,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
    },
  ];

  return (
    <div className="section3-container">
      <div className="map-container">
        <h2>BEST TRIPS FOR YOU</h2>
        <img src={MapImage} alt="Map" className="map" />
      </div>
      <div className="cards-container">
        {tourDestinations.map((destination) => (
          <div key={destination.id} className="card">
            <img src={destination.img} alt="Scenic view of Ha Giang" />
            <div className="tag">
              <i className="fa-solid fa-clock" style={{ color: "#ff0000" }} />
              <span>{destination.time}</span>
            </div>
            <ul className="amenities">
              <h2>
                {destination.name}
                {destination.day}
              </h2>
              <li>
                <i className="fa-solid fa-house pr-2"></i>
                {destination.address}
                <span>{destination.room}</span>
              </li>
              <li>
                <i className="fa-solid fa-motorcycle pr-2"></i>
                {destination.bike}
                <span>{destination.xe}</span>
              </li>
              <li>
                <i className="fa-solid fa-user pr-2"></i>
                {destination.tourguid}
              </li>
              <li>
                <i className="fa-solid fa-bus pr-2"></i>
                {destination.transport}
                <span>{destination.oto}</span>
              </li>
            </ul>

            <div className="price">
              <span className="to">Fromto</span>
              <span>{destination.money}</span>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Section3;
