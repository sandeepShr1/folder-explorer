import React, { useState } from 'react';

const Folder = ({ explorer }) => {
      const [expand, setExpand] = useState(false);
      if (explorer.items) {
            return <div>
                  <h2 onClick={() => { setExpand(!expand) }}>{explorer.name}</h2>
                  <div style={{ display: expand ? "block" : "none", paddingLeft: "3rem" }}>
                        {explorer.items.map((exp) => {
                              return <Folder key={exp.name} explorer={exp} />
                        })}

                  </div>
            </div>
      }
      else {
            return <div>{explorer.name}</div>
      }

};

export default Folder;
