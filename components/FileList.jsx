"use client"
import { useState } from "react";
import useCloseOnEsc from "@hooks/useCloseOnEsc";

export default function FileList ({data}) {
    const [expandedOptions, setExpandedOptions] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleOption = (option) => {
      setExpandedOptions((prevState) => ({
        ...prevState,
        [option]: !prevState[option],
      }));
    };

    const openModal = () => () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    useCloseOnEsc(closeModal);

    const renderLista = (obj) => {
        return (
          <div>
            <button onClick={openModal}>Abrir modal</button>
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
          </div>
        );
      };
    
      return <div>{renderLista(data)}</div>;
    };