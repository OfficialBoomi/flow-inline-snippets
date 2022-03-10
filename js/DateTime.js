const DateTime = function DateTime (props) {
   let timestamp = props.contentValue;
   let dt = new Intl.DateTimeFormat('en-GB', {
       year: 'numeric',
       month: 'short',
       day: '2-digit',
       hour: '2-digit',
       minute: '2-digit'
   }).format(new Date(timestamp));
   if (timestamp != null && timestamp.length > 0) {
       return React.createElement("span", {
           class: "timestamp"
       }, dt);
   }
   return null;
};

manywho.component.register('DateTime', DateTime);