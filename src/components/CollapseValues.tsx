import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

type Props = {
    children: JSX.Element[] | JSX.Element;
    title: string;
};

export default function CollapseValues({ children, title }: Props) {
   const [open, setOpen] = useState(false);
    return (
        <div className="card">
            <div className="card-header p-0 bg-transparent" id="headingOne">
                <h2 className="mb-0">
                    <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                    onClick={() => {
                        if(open) {
                            setOpen(false);
                        }
                        else{
                            setOpen(true);
                        }
                    }}
                    >
                        { title }
                    </button>
                </h2>
            </div>

            {/* <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion"> */}
            <Collapse in={open} aria-labelledby="headingOne" data-parent="#our-values-accordion">
                <div className="card-body">
                    { children }
                </div>
            </Collapse>
            {/* </div> */}
        </div>
        // <div>{ children }</div>
    )
}
