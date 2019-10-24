import React from 'react';
import './styles.scss';
import {Icon} from "../../Icon";

export const Aside = ({show, setShow, children}) => (
    <aside className={`aside ${show ? 'show' : ''}`}>
        <Icon
            className={"aside-close"}
            icon={'fa-times'}
            size={20}
            onClick={() => setShow(!show)}
        />
        {children}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur, corporis distinctio dolorem enim
        est magnam molestias neque nisi nostrum odio perspiciatis similique soluta unde, ut vel, voluptates? Quae,
        reiciendis?

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consequuntur esse eveniet fugiat id
        incidunt modi, mollitia non obcaecati odio officia omnis quae quos, repellendus reprehenderit tempore ut velit?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum eius, hic id inventore, iste minima
        obcaecati odit quasi repellendus sint sit, voluptate voluptatem. A eligendi inventore molestiae officiis
        voluptate.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur, corporis distinctio dolorem enim
        est magnam molestias neque nisi nostrum odio perspiciatis similique soluta unde, ut vel, voluptates? Quae,
        reiciendis?

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consequuntur esse eveniet fugiat id
        incidunt modi, mollitia non obcaecati odio officia omnis quae quos, repellendus reprehenderit tempore ut velit?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum eius, hic id inventore, iste minima
        obcaecati odit quasi repellendus sint sit, voluptate voluptatem. A eligendi inventore molestiae officiis
        voluptate.
    </aside>
);
