const FormatPrice = ({price}) => {

    return Intl.NumberFormat("en-PK" , {
    style: "currency" , 
    currency: "PKR" ,
    maximumFractionDigits: 2 , 
    }).format (price * (3.330971 / 100)  );
};
export default FormatPrice;