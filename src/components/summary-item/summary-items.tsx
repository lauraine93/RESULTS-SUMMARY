import './summary-item.css';
interface summaryItemsProps{
      value: "/ 100";
      label: string;
      mark : number;
      color: string;
      backgroundColor:string;
      src:string;
      
} 
export const SummaryItems= ({ value, label,mark,color,backgroundColor, src}: summaryItemsProps) => {
    return (
        <div className="Items" style={{color, backgroundColor}} >
            <div className="Items-logo">
              <img src={src}></img>
              <p className="nameItems"> {label}</p>
            </div>
           
            <div className="average">
                <span>{mark}</span>
                <span>{value}</span>
            </div>
           
        </div>
    )
}