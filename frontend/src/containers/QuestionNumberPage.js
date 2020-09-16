import React from 'react';
import '../styles/App.scss';

import questionpagedesign from '../styles/QuestionNumberPage.module.scss';
function QuestionNumberPage() {
    return (
        <div>
            <div className={questionpagedesign.centercontainer }>
                <div className={questionpagedesign.toporange }>

                </div>

                 <div className={questionpagedesign.bottomgreen }>
                
                </div> 

            </div> 

            {/* <div className={questionpagedesign.toporange }>

            </div> */}

            <div className={questionpagedesign.leftblue }>
                
            </div>

            <div className={questionpagedesign.rightpink }>
                
            </div>

            <div className={questionpagedesign.title}>
                 Question 9
            </div>

            {/* <div className={questionpagedesign.bottomgreen }>
                
            </div> */}

        </div>
    
  
    );
  }
  
  export default QuestionNumberPage;