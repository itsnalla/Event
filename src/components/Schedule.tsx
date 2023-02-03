import { FC } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
/*
 * @dev duration is in hours
 */
type Segment = {
  name: string;
  time: string;
  assigned: string;
};

const PROGRAMME: Segment[] = [ 
  
  {
    name: "Ingress",
    time: "9:00AM - 9:30AM",
    assigned: "",
  },
  {
    name: "PRAYER",
    time: "9:30AM - 9:40AM",
    assigned: "PASTOR EDGAR TACATA",
  },
  {
    name: "OPENING AND WELCOME REMARKS",
    time: "9:40AM - 10:00AM",
    assigned: "MC",
  },
  {
    name: "What is Proof of stake",
    time: "10:00AM - 10:15AM",
    assigned: "Doug Petkanics",
  },
  {
    name: "Advantage/Disadvantage of POS",
    time: "10:15AM - 10:30AM",
    assigned: "Humpty Calderon",
  },
  {
    name: "Cyber security and digital fruad",
    time: "10:30AM - 11:00AM",
    assigned: "NBI/POLICE Representative",
  },
  {
    name: "GOVERNMENT STAND ON CRYPTOCURENCY",
    time: "11:00AM - 11:25AM",
    assigned: "DICT/DOST Representative",
  },
  {
    name: "EMBRACING CRYPTO and DIGITALIZATION",
    time: "11:20AM - 11:50AM",
    assigned: "TACLOBAN CITY MAYOR/Representative",
  },
  {
    name: "Launch Break/Go to activity area get merch from project sponsors.",
    time: "11:50AM - 01:00PM",
    assigned: "",
  },
  {
    name: "what is Livepeer? lpt delegation?",
    time: "01:00PM - 01:30PM",
    assigned: "Doug Petkanics",
  },
  {
    name: "what is Tendeirze liquid staking?",
    time: "01:30PM - 02:00PM",
    assigned: "Nico Vergauwen",
  },
  {
    name: "what is ontology? ont staking/validator?",
    time: "02:00PM - 02:30PM",
    assigned: "Humpty Calderon",
  },
  {
    name: "what is First choice coin? fcc staking?",
    time: "02:30PM - 03:00PM",
    assigned: "Alvin Abalos",
  },
  {
    name: "Picture Taking / End of Conference",
    time: "03:00PM - 03:05PM",
    assigned: "",
  },
  {
    name: "San Juanico Cruise for VIP GUEST and Sponsors",
    time: "03:00PM - 06:00PM",
    assigned: "San JUanico Cruise",
  },
  {
    name: "EAT ALL YOU CAN DINNER for VIP GUEST and Sponsors",
    time: "06:00PM - 10:00PM",
    assigned: "ORIENTAL DE LEYTE",
  },
  {
    name: "Egress",
    time: "10:15PM - 10:30PM",
    assigned: "",
  },
];

const Schedule: FC = () => {
  return (
    <main className="grid w-full max-w-[900px] grid-cols-1 p-10 md:grid-cols-[1fr_3fr]">
      {PROGRAMME.map((e, idx) => (
        <>
          <span
            className={`block w-full pt-2 text-center font-satoshi md:py-2 ${
              idx % 2 === 0 ? "bg-glass" : ""
            }`}
          >
            {e.time}
          </span>
          <div
            className={`block grid w-full grid-cols-1 pb-2 text-center font-satoshi text-base font-bold md:py-2 ${
              idx % 2 === 0 ? "bg-glass" : ""
            }`}
          >
            <span>{e.name}</span>
            <span className="text-sm font-normal">{e.assigned}</span>
          </div>
        </>
      ))}
    </main>
  );
};

//--------------------------------------------
// Exports
export default Schedule;
