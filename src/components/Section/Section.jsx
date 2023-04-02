import PropTypes from 'prop-types';
import style from '../Section/style.module.css'

export default function Section ({title, children}) {
    return ( 
        <section className={style.container}>
            <h2>{title}</h2>
            {children}
     </section>
 )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};







