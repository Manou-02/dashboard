import "./widgetSm.css"
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img src="https://img.freepik.com/photos-gratuite/homme-serieux-recherche-agreable-se-tient-profil-expression-confiante-porte-t-shirt-blanc-decontracte_273609-16959.jpg?size=626&ext=jpg" alt="Images" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility className="widgetSmIcon" /> Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://img.freepik.com/photos-gratuite/homme-serieux-recherche-agreable-se-tient-profil-expression-confiante-porte-t-shirt-blanc-decontracte_273609-16959.jpg?size=626&ext=jpg" alt="Images" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility className="widgetSmIcon" />Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://img.freepik.com/photos-gratuite/homme-serieux-recherche-agreable-se-tient-profil-expression-confiante-porte-t-shirt-blanc-decontracte_273609-16959.jpg?size=626&ext=jpg" alt="Images" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility className="widgetSmIcon"  /> Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://img.freepik.com/photos-gratuite/homme-serieux-recherche-agreable-se-tient-profil-expression-confiante-porte-t-shirt-blanc-decontracte_273609-16959.jpg?size=626&ext=jpg" alt="Images" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility className="widgetSmIcon"  /> Display</button>
                </li>
                <li className="widgetSmItem">
                    <img src="https://img.freepik.com/photos-gratuite/homme-serieux-recherche-agreable-se-tient-profil-expression-confiante-porte-t-shirt-blanc-decontracte_273609-16959.jpg?size=626&ext=jpg" alt="Images" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn"><Visibility className="widgetSmIcon" /> Display</button>
                </li>
            </ul>
        </div>
    )
}
