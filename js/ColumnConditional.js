          /* ===================================================

            Covert a column to a specific icon based on the columns content value
            Example: If column string === green. Display a glyphicon glyphicon-ok
            Modify as needed


            ===================================================== */
            const columnCondition = function columnCondition (props) {

               // Grabs content value from column. toLowerCase() converts to lowercase.
               let columnContent = props.contentValue.toLowerCase();

               switch (columnContent) {

                   case 'green':   // Green
                   return (
                       React.createElement('span', { title: columnContent, style: {color:'green'}, className: 'glyphicon glyphicon-ok-circle' })
                   );
                   break;

                   case 'yellow':  // Yellow
                   return ( React.createElement('span', { title: columnContent, style: {color:'gold'} , className: 'glyphicon glyphicon-exclamation-sign' })
                   );
                   break;

                   case 'red':     // Red
                   return ( React.createElement('span', { title: columnContent,  {color:'green'}, className: 'glyphicon glyphicon-remove-circle' })
                   );
                   break;

                   default:
                   return ( React.createElement('span', { title: columnContent,  {color:'gray'}, className: 'glyphicon glyphicon-question-sign' })
                   );
                   break;
               }
            }
            manywho.component.register('column-conditional', columnCondition);
