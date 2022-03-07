import "./style.css"

const ServiceCard = ({title,content,logoBg,logo,style}) => {
    return (
      <div className={`font-open-sans px-10 py-5 md:py-12 cursor-pointer serviceCard-wrapper ${style}`}>
        <div
          className="serviceCard-img-container"
          style={{ background: logoBg }}
        >
          <img src={logo} alt="" />
        </div>
        <p className="text-2xl mb-5">{title}</p>
        <p className="text-base text-gray-500">{content}</p>
      </div>
    );
}

export default ServiceCard
