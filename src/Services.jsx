import Card from "./Card";
import Cdata from "./Cdata";
const Services = () => {
  return (
    <>
      {Cdata.map((elem) => {
        return (
          <>
            <Card
              imgsrc={elem.imgsrc}
              title={elem.title}
              text={elem.text}
              link={elem.link}
            />
          </>
        );
      })}
    </>
  );
};
export default Services;
