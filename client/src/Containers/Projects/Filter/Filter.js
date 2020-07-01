import React from 'react';

import styles from './Filter.module.scss';

const Filter = (props) => {

    let filterdivContent;

    let options = [
        { value: "openTilbud", label: "Åpne tilbud " + openTilbudCount },
        { value: "closedTilbud", label: "Lukkede tilbud " + closedTilbudCount },
        {
            value: "notStartedProjects",
            label: "Ikke startet prosjekter " + notStartedProjectsCount,
        },
        {
            value: "startetButNotDoneProjects",
            label:
                "Startet, men ikke ferdige prosjekter " +
                startedButNotDoneProjectsCount,
        },
        {
            value: "doneButNotClosedProjects",
            label:
                "Ferdige, men ikke avsluttede prosjekter " +
                doneButNotClosedProjectsCount,
        },
        {
            value: "closedProjects",
            label: "Avsluttede prosjekter " + closedProjectsCount,
        },
    ];

    filterdivContent = (
        <div className="FilterDivContent">
            <label>Tags:</label>
            <Select
                placeholder="Alle statuser"
                options={options}
                isMulti
                onChange={onFilterChange}
                classNamePrefix="rs"
                className="rs__custom-style"
            />
        </div>
    );

    const onFilterChange = (e) => {
    resetPaging();
    setShowOpenTilbud(false);
    setShowClosedTilbud(false);
    setShowNotStartedProjects(false);
    setShowStartedButNotDoneProjects(false);
    setShowDoneButNotClosedProjects(false), setShowClosedProjects(false);
    if (e && Array.isArray(e) && e.length > 0) {
        for (let i = 0; i < e.length; i++) {
            if (e[i].value) {
                switch (e[i].value) {
                    case "openTilbud":
                        setShowOpenTilbud(true);
                        break;
                    case "closedTilbud":
                        setShowClosedTilbud(true);
                        break;
                    case "notStartedProjects":
                        setShowNotStartedProjects(true);
                        break;
                    case "startetButNotDoneProjects":
                        setShowStartedButNotDoneProjects(true);
                        break;
                    case "doneButNotClosedProjects":
                        setShowDoneButNotClosedProjects(true);
                        break;
                    case "closedProjects":
                        setShowClosedProjects(true);
                        break;
                        }
                    }
                }
            } else {
                setShowOpenTilbud(true);
                setShowClosedTilbud(true);
                setShowNotStartedProjects(true);
                setShowStartedButNotDoneProjects(true);
                setShowDoneButNotClosedProjects(true), setShowClosedProjects(true);
            }
    };

    return(
        <div className={styles.Filter}>

        </div>
    );
}

export default Filter;