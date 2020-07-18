import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subTitle: "Curology",
    title: "A custom formula for your skin's needs",
    img: "curology-min",
  },
  {
    id: 2,
    subTitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subTitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow disabled prev">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>

        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subTitle}</span>
                <h2>{caseItem.title}</h2>
              </div>

              <div className="case-image">
                <img src={require(`../assets/${caseItem.img}.png`)} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
