"use client"

import { useState } from "react";


export default function FileList ({data}) {
    const [expandedOptions, setExpandedOptions] = useState({});

    const toggleOption = (option) => {
      setExpandedOptions((prevState) => ({
        ...prevState,
        [option]: !prevState[option],
      }));
    };

    const renderLista = (obj) => {
        return (
          <ul>
            {Object.entries(obj).map(([key, value]) => (
              <li key={key}>
                {typeof value === 'object' ? (
                  <div>
                    <strong onClick={() => toggleOption(key)}>
                      {key}
                    </strong>
                    {expandedOptions[key] && renderLista(value)}
                  </div>
                ) : (
                  <span>{key}</span>
                )}
              </li>
            ))}
          </ul>
        );
      };
    
      return <div>{renderLista(data)}</div>;
    };