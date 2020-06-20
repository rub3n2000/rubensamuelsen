import React from 'react';
import './FollowMe.scss';

const FollowMe = ( props ) => {
    return(
        <div className="FollowMe">
            <ul>
                <li>
                    <a class="twitter" target="_blank"
                     href="https://twitter.com/RubyIEDev" title="Follow On Twitter">
                         <span>Follow on Twitter</span>
                    </a>
                </li>
                <li>
                    <a class="github" target="_blank"
                     href="https://github.com/rub3n2000" title="Follow On Github">
                         <span>Follow on Github</span>
                    </a>
                </li>
                <li>
                    <a class="linkedin" target="_blank"
                     href="https://www.linkedin.com/in/ruben-samuelsen/" title="Add to LinkedIn network">
                         <span>Add to LinkedIn network</span>
                    </a>
                </li>
                <li>
                    <a class="email" target="_blank"
                     href="mailto:ruben@tresam.no" title="Send me an Email">
                         <span>Send me an Email</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FollowMe;