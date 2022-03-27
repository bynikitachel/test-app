import planetsInfo from '../../JSON/platetsInfo.json';

const Planet = () => {

    const renderPlanets = () => {
        return planetsInfo.planets.map((planet, i) => (
            <div key={i} className='planet'>
                <div className='container-planet'>
                    <div className={`image-planet ${planet.name}`}></div>
                </div>
                <div className='description-planet'>
                    {planet.description}
                </div>
            </div >
        ));
    };

    const planets = renderPlanets();

    return planets;
}

export default Planet;