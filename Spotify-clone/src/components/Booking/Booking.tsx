
import "../../assets/css/section-1.css";
import BookingItem from "./BookingItem/BookingItem";

export default function Booking() {
  return (
    <div className="inline-flex items-center padding-booking  max-w-[886px]  gap-8">
      <div className="flex items-center  absoulute">
        <BookingItem label="DAYS" duration="5 days 4 night" classname="w-40" />
        <div className="line "></div>
        <BookingItem
          label="TYPE OF TOUR"
          duration="Best Budget"
          classname="w-36"
        />
        <div className="line"></div>
        <BookingItem label="SELF DRIVING" duration="5 pax" classname="w-28" />
        <div className="line"></div>
        <BookingItem
          label="PRIVATE DRIVING"
          duration="5 pax"
          classname="w-28"
        />
      </div>
      <div className="flex px-6 flex-col justify-center items-center gap-1 button-booking h-auto">
        <p className="text-m-booking">$299</p>
        <p className="text-b-booking">BOOK NOW</p>
      </div>
    </div>
  );
}
