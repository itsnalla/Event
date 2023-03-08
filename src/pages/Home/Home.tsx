import { FC } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import Navbar from "components/Navbar";
import Schedule from "components/Schedule";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const INCLUDES = [
  {
    name: "IRL Event",
    imgPath: "events.png",
  },
  {
    name: "CSC Merch",
    imgPath: "merch.png",
  },
  {
    name: "San Juanico Cruise",
    imgPath: "cruise.png",
  },
  {
    name: "Activities",
    imgPath: "activities.png",
  },
];

const SPEAKERS = [
  {
    name: "Doug Petkanics",
    imgPath: "speakers/doug.png",
    positions: [
      "Co-Founder - livepeer",
      "Co-Founder - livepeer studio",
      "CEO - Livepeer",
     
    ],
  },
  {
    name: "Nico Vergauwen",
    imgPath: "speakers/nico.png",
    positions: [
      "Co-Founder - Tenderize.me",
      "CEO - Tenderize.me",
      "Chief Technical - Tenderize.me",
      
    ],
  },
  {
    name: "Humpty Calderon",
    imgPath: "speakers/humpty.png",
    positions: [
      "Head of Community - Ontology",
      
      
    ],
  },
  {
    name: "Alvin Abalos",
    imgPath: "speakers/alvin.png",
    positions: [
      "CEO - First choice coin DAO",
      "Community Manager",
      "Crypto Ambassador",
      
    ],
  },
  {
    name: "Allan Catayoc",
    imgPath: "speakers/allan.png",
    positions: [
      "Visayas Regional Manager - Web3 Philippines",
      "Founder - Heroes Uprising",
      "Co-Founder - Vulcanic Labs",
      
    ],
  },
  {
    name: "Nigel Dollentas",
    imgPath: "speakers/nigel.png",
    positions: [
      "Head of Community - Tenderize",
    ],
  },
  {
    name: "Angel Abalos",
    imgPath: "speakers/angel.png",
    positions: [
      "Co-founder of First Choice Coin DAO",
      "Co-Founder of Crypto Staking Conference 2023",
    ],
  },
  {
    name: "Raine Laluna",
    imgPath: "speakers/raine.png",
    positions: [
      "Co-Founder - FilipinasNFT",
      "Co-Founder - Web3 Cebu",
    ],
  },
  {
    name: "Jeff Caceres",
    imgPath: "speakers/jeff.png",
    positions: [
      "Founder - NomadFury",
      "Founder - Web3 Lounge",
      "Founder - Web3 Bacolod",
    ],
  },
  {
    name: "Ken Berdz Berry",
    imgPath: "speakers/ken.png",
    positions: [
      "Founder - Blockchain Network Philippines",
      "Founder - Mindanao Blockchain Association",
    ],
  },
  {
    name: "Lou Sumampong",
    imgPath: "speakers/lou.png",
    positions: [
      "Social Media Manager - Blockchain Network Philippines",
      "Philippines Brand Ambassador - Upstairs NFT Marketplace",
    ],
  },
  
 
];

const Home: FC = () => {
  return (
    <main>
      <Navbar />
      <section id="home">
      <header className="flex h-screen w-screen items-center justify-center bg-header bg-opacity-25 p-10 font-satoshi">
        <div className="flex flex-col items-center text-white">
          <p className="text-center text-xl font-bold tracking-[12px] md:text-3xl">
            CRYPTO STAKING CONFERENCE
          </p>
          <h1 className="my-8 text-center font-futura text-4xl font-bold md:text-6xl">
            What is Staking / Proof-of-Stake?
          </h1>
          <p className="mb-8 max-w-[900px] text-center font-satoshi text-base text-base font-bold tracking-widest md:text-lg">
          Join us in building stronger and discovering deeper the 
          concept of Proof of Staking from the greatest minds in the space.
          </p>
          <a
            href="#tickets"
          >
            <div className="mb-2 rounded-full border-2 border-white py-2 px-6 text-center text-base font-bold hover:cursor-pointer hover:bg-white hover:text-purple-heart md:text-2xl">
              Get NFT Ticket
            </div>
          </a>
          <p className="text-base font-bold opacity-80 hover:opacity-100">
            Slots: Limited
          </p>
        </div>
      </header>
      </section>

      
      <section className="h-[500px] w-screen bg-draper-one bg-cover bg-center text-white">
        <div className="flex h-full w-full flex-col items-center justify-center bg-dim p-10">
          <h2 className="mb-4 text-center font-satoshi text-xl font-bold tracking-widest md:text-2xl">
            Mar. 25, 2023 @ 9AM-7PM PHT
          </h2>
          <h1 className="text-center font-futura text-3xl font-bold tracking-wide md:text-5xl">
            Summit Hotel Grand BallRoom - Conference and exhibit
            <h2>
              <span></span>
            </h2>
        
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-center bg-purple-circles bg-[length:100%_100%] py-28 px-10">
        <div className="w-screen max-w-[900px] p-10">
          <h1 className="mb-16 w-full text-center font-futura text-xl text-black md:text-3xl">
            What to expect out of CRYPTO STAKING CONFERENCE event?
          </h1>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map((e, idx) => (
              <div key={idx} className="flex h-full w-full justify-center">
                <div className="flex h-full w-9/12 flex-col items-center rounded-2xl border-2 border-purple-400 p-4">
                  <img src={e.imgPath} alt={e.name} />
                  <p className="text-center font-satoshi text-base ">
                    {e.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
</section>
<section 
        id="speakers"
        className="flex flex-col items-center bg-purple-400-circles bg-[length:100%_100%] py-28 px-10">
        <div className="mt-20 w-screen max-w-[900px]">
          <h1 className="mb-16 w-full text-center font-futura text-xl text-black md:text-3xl">
            Event Speakers
          </h1>
          {SPEAKERS.map((e, idx) => (
            <div key={idx}>
              <div className="grid w-full grid-cols-1 px-10 text-center md:grid-cols-2 md:text-left">
                <aside className="order-first flex items-center justify-center md:order-none">
                  <img src={e.imgPath} alt={e.name} />
                </aside>

                <aside
                  className={`mb-10 flex flex-col justify-center ${
                    idx % 2 === 1 ? "order-first" : ""
                  }`}
                >
                  <h1 className="mb-2 border-b-2 border-purple-400 font-futura text-lg text-purple-400 md:text-2xl">
                    {e.name}
                  </h1>
                  {e.positions.map((p, pIdx) => (
                    <p key={pIdx} className="font-satoshi text-base font-bold">
                      {p}
                    </p>
                  ))}
                </aside>
              </div>
            </div>
          ))}
        </div>
        {/*<div>
       <p className="my-32 max-w-[400px]  font-satoshi text-xl font-bold ">
          AND MANY MORE SPEAKERS</p>
                  </div>*/}

        <p className="my-32 max-w-[400px] rounded-2xl border-4 border-purple-400 p-4 text-center font-satoshi text-xl font-bold text-purple-400">
          If you're ready to learn about Crypto Staking join us in our event.
        </p>
      </section>

      <section className="w-screen bg-gradient-to-b from-purple-400/25 via-fuchsia-500/25 to-purple-900/25 text-black">
        <h1
          id="programme"
          className="w-full text-center font-futura text-3xl text-black"
        >
          Programme
        </h1>
    
        <div className="flex w-full justify-center">
          <Schedule />
        </div>
      </section>

      <section
        id="tickets"
        className="bg-sponsors-bg flex w-screen flex-col items-center p-10 md:p-20"
      >
        <h1 className="pb-4 text-center font-futura text-xl text-black md:text-3xl">
          Event Ticket Prices
        </h1>
        <div className="grid-cols-3">
          <div className="flex h-full w-full justify-center">
        <div className="ticketcolumns">
              <ul className="price">
                <li className="header">Gen. Admission</li>
                <li className="grey">10 MATIC</li>
                <li>Access to conference</li>
                <li>Event kit (includes tshirt)</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li className="grey"><a href="https://ticketscsc.fccnft.info/" className="button">Buy Now</a></li>
              </ul>
        </div> 
        <div className="ticketcolumns">
              <ul className="price">
                <li className="header">VIP</li>
                <li className="grey">50 MATIC</li>
                <li>Access to conference</li>
                <li>Event kit</li>
                <li>t-shirts</li>
                <li>1 San Juanico cruise during sunset</li>
                <li>1 Dinner @ Oriental De Leyte and fire dance show</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li>x</li>
                <li className="grey"><a href="https://ticketscsc.fccnft.info/" className="button">Buy Now</a></li>
              </ul>
        </div> 
        <div className="ticketcolumns">
              <ul className="price">
                <li className="header">Sponsor</li>
                <li className="grey">700 MATIC</li>
                <li>2 Access to conference</li>
                <li>Event kit</li>
                <li>t-shirts and merch</li>
                <li>2 Dinner @ Oriental De Leyte and fire dance show</li>
                <li>Promote you Project</li>
                <li>your project pamphlets will be included in the EVENT KIT.</li>
                <li>10 to 20 minutes speaking time for your Project Promotion</li>
                <li>10 to minutes time to speak about A topic</li>
                <li>booth in exhibit for your project.</li>
                <li className="grey"><a href="https://ticketscsc.fccnft.info/" className="button">Buy Now</a></li>
              </ul>
        </div> 
</div>
</div>
</section>
<section className="h-[500px] w-screen bg-draper-two bg-cover bg-center text-white">
        <div className="flex h-full w-full flex-col items-center justify-center bg-dim p-10">
          <h2 className="mb-4 text-center font-satoshi text-xl font-bold tracking-widest md:text-2xl">
          Mar. 25, 2023 @ 9AM-7PM PHT
          </h2>
          <h1 className="text-center font-futura text-3xl font-bold tracking-wide md:text-5xl">
           Summit Hotel Grand BallRoom - Conference and exhibit
            <h2>
              <span></span>
            </h2>
            
          </h1>
        </div>
      </section>
<section
        id="sponsors"
        className="bg-sponsors-bg flex w-screen flex-col items-center p-10 md:p-20"
      >
        <h1 className="pb-4 text-center font-futura text-xl text-black md:text-3xl">
          Special thanks to our sponsors!
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2">
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://livepeer.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-full" src="sponsors/livepeer.png" alt="Livepeer" />
            </a>
          </aside>
          <aside className="order-first flex w-full items-center justify-center md:order-none">
            <a
              href="https://ont.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="sponsors/ontology.png"
                alt="ontology"
              />
            </a>
          </aside>
          
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://www.tenderize.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="sponsors/tenderizelogo.png"
                alt="Tenderize"
              />
            </a>
          </aside>
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://firstchoicecoin.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full"
                src="sponsors/fcc logo2.jpg"
                alt="First Choice Coin"
              />
            </a>
          </aside>
        </div>
      </section>

      <section
        id="sponsors"
        className="bg-sponsors-bg flex w-screen flex-col items-center p-10 md:p-20"
      >
        <h1 className="pb-4 text-center font-futura text-xl text-black md:text-3xl">
          Also to our community partners!
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="flex w-full items-center justify-center">
            <a
              href="https://firstchoicecoin.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/fcc academy.png"
                alt="fcc academy"
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="https://web3philippines.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/web3philippines.png"
                alt="Web3 Philippines"
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href=".com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/robinson tacloban.png"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href=".com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/summit-hotel-tacloban.png"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/sanjuanico.png"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/apex.jpg"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/artspot.jpg"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/donpedrohotel.jpg"
                alt=""
              />
            </a>
          </aside>

          <aside className="flex w-full items-center justify-center">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full max-w-[400px]"
                src="partners/nerjan.jpg"
                alt=""
              />
            </a>
          </aside>

        </div>
      </section>
      <section className="h-[100%] w-screen text-center bg-gradient-to-b from-purple-400/25 via-fuchsia-500/25 to-purple-900/25">
      <div className="flex flex-col items-center text-white">
        <p></p>
      <h4 className="mb-8 max-w-[1200px] text-center font-futura text-3xl font-bold tracking-wide md:text-2xl text-black">
        <p className="text-center text-xl font-bold tracking-[1px] md:text-5xl">
          WHY ATTEND CRYPTO STAKING CONFERENCE?
        </p></h4>
         <div>
        <h1 className="mb-8 max-w-[1200px] text-center font-futura text-3xl font-bold tracking-wide md:text-2xl text-black">
         GENERAL AUDIENCE - 
         Meet founders and executives of leading crypto project and 
         share view on the Staking industry. 
         </h1>
          
        <h3 className="mb-8 max-w-[1200px] text-center font-futura text-3xl font-bold tracking-wide md:text-2xl text-black">
         <span>INVESTORS.STARTUPS - 
         Crypto Staking Conference brings together the investors, industry insiders 
         and startups and creates unique networking and opportunities.
         </span>
         </h3>
        
         <h3 className="mb-8 max-w-[1200px] text-center font-futura text-3xl font-bold tracking-wide md:text-2xl text-black">
         <span>BUSINESS OWNERS/AGENCIES - 
         Crypto Staking Conference create business opportunities to start in the cryptocurrency world 
         and adopt it into your existing system.
         </span>
         </h3>
         </div>
        </div>
      </section>
      

      <footer className="grid w-screen grid-cols-1 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 p-10 text-white md:grid-cols-[1fr_4fr]">
        <aside className="flex w-full justify-center md:block">
          <img
            className="h-auto w-full max-w-[200px]"
            src="csc logo.png"
            alt="CSC Logo"
          />
        </aside>

        <aside className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-10 grid grid-cols-1 text-center">
            <h1 className="font-satoshi text-xl font-bold">Menu</h1>
            <Link to="/">
              <p className="my-2 font-satoshi text-base">Home</p>
            </Link>
            <a href="#speakers">
              <p className="my-2 font-satoshi text-base">Speakers</p>
            </a>
            <a href="#programme">
              <p className="my-2 font-satoshi text-base">Programme</p>
            </a>
            <a href="#sponsors">
              <p className="my-2 font-satoshi text-base">Sponsors</p>
            </a>
          </div>

          <div className="my-10 grid grid-cols-1 text-center">
            <h1 className="font-satoshi text-xl font-bold">Socials</h1>

            <a
              href="https://t.me/+3vJ5bKqZ6uA5ODdl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base">Telegram</p>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089099091708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base">Facebook</p>
            </a>
            <a
              href="https://twitter.com/web3phl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-2 font-satoshi text-base"></p>
            </a>
          </div>
        </aside>
      </footer>
    </main>
  );
};

//--------------------------------------------
// Exports
export default Home;
