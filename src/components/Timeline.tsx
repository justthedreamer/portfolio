// Timeline Component
// Maping educationTimeline and rendering content on site.

import educationTimeline from '../resources/Education_section/educationCollection'
import schoolIcon from '../resources/Education_section/school.svg';
import useMediaQuery from '../resources/Media_Query/useMediaQuery';

export const Timeline = () => {

    const isDesktop = useMediaQuery('(min-width: 960px)');

    return (
        <div className={isDesktop ? 'timeline' : 'timeline-mobile'}>
            {
                educationTimeline.map((element)=>{
                    let isOdd = element.id % 2 === 0;
                    
                    if(isDesktop)
                    {
                        return (
                            <>
                           {
                            isOdd ?
                                <>
                                    <div className='timeline-item timeline-item-l'>
                                    <h3 className='timeline-item-title'>{element.title}</h3>
                                        <h4 className='timeline-item-organization-name'>{element.organizationName}</h4>
                                        <h5 className='timeline-item-location'>{element.location}</h5>
                                        <p className='timeline-item-description'>{element.description}</p>
                                        <a className='timeline-item-link' href={element.organizationWebsite}>{element.linkText}</a>
                                    </div>
                                    <div className="timeline-core-line">
                                    <div className="icon-container">
                                            <img className='icon' src = {   schoolIcon } alt="asd" />
                                        </div>
                                    </div>
                                    <div className="timeline-item-r timeline-item-date">
                                        <p className='timelin-item-date'>{element.date}</p>
                                    </div>
                                </> 
                                : 
                                <>
                                    <div className="timeline-item-l timeline-item-date">
                                        <p className='timeline-item-date'>{element.date}</p>
                                    </div>
                                    <div className="timeline-core-line">
                                        <div className="icon-container">
                                            <img className='icon' src = {   schoolIcon } alt="asd" />
                                        </div>
                                    </div>
                                    <div className='timeline-item timeline-item-r'>
                                        <h3 className='timeline-item-title'>{element.title}</h3>
                                        <h4 className='timeline-item-organization-name'>{element.organizationName}</h4>
                                        <h5 className='timeline-item-location'>{element.location}</h5>
                                        <p className='timeline-item-description'>{element.description}</p>
                                        <a className='timeline-item-link' href={element.organizationWebsite}>{element.linkText}</a>
                                    </div>
                                </>
                            }
                            </> 
                        )
                    }else{
                        return (
                            <>
                            {
                                <>
                                    <div className="timeline-core-line-mobile"> 
                                        <div className="icon-container-mobile">
                                            <img className='icon-mobile' src = {   schoolIcon } alt="asd" />
                                        </div>
                                    </div>
                                    <div className="timeline-item-mobile">
                                    <h3 className='timeline-item-title'>{element.title}</h3>
                                        <h4 className='timeline-item-organization-name'>{element.organizationName}</h4>
                                        <h5 className='timeline-item-location'>{element.location}</h5>
                                        <p className='timeline-item-description'>{element.description}</p>
                                        <a className='timeline-item-link' href={element.organizationWebsite}>{element.linkText}</a>
                                    </div>
                                </> 
                            
                            }
                            </> 
                        )
                    }
          
                })
            }

        </div>
    )
}