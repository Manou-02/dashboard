import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={ "widgetLgBtn     " + type}> {type} </button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTableHead">Customer</th>
                        <th className="widgetLgTableHead">Date</th>
                        <th className="widgetLgTableHead">Amount</th>
                        <th className="widgetLgTableHead">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images-platform.99static.com//dZlJM8kROaolNL7JaF9VOOOW8co=/1341x991:2594x2244/fit-in/500x500/projects-files/69/6997/699729/bd445bb5-a0e9-406e-ac9f-59a3445a9ee0.jpg" alt="pCustomer" className='widgetLgImg' srcset="" />
                            <span className="widgetLgName">Jack Daniels</span>
                        </td>
                        <td className="widgetLgDate">2 jun 2021</td>
                        <td className="widgetLgAmount"> $220.00</td>
                        <td className="widgetLgStatus"> <Button type="Approved" /> </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images-platform.99static.com//dZlJM8kROaolNL7JaF9VOOOW8co=/1341x991:2594x2244/fit-in/500x500/projects-files/69/6997/699729/bd445bb5-a0e9-406e-ac9f-59a3445a9ee0.jpg" alt="pCustomer" className='widgetLgImg' srcset="" />
                            <span className="widgetLgName">Jack Daniels</span>
                        </td>
                        <td className="widgetLgDate">2 jun 2021</td>
                        <td className="widgetLgAmount"> $220.00</td>
                        <td className="widgetLgStatus"> <Button type="Declined" /> </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images-platform.99static.com//dZlJM8kROaolNL7JaF9VOOOW8co=/1341x991:2594x2244/fit-in/500x500/projects-files/69/6997/699729/bd445bb5-a0e9-406e-ac9f-59a3445a9ee0.jpg" alt="pCustomer" className='widgetLgImg' srcset="" />
                            <span className="widgetLgName">Jack Daniels</span>
                        </td>
                        <td className="widgetLgDate">2 jun 2021</td>
                        <td className="widgetLgAmount"> $220.00</td>
                        <td className="widgetLgStatus"> <Button type="Pending" /> </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://images-platform.99static.com//dZlJM8kROaolNL7JaF9VOOOW8co=/1341x991:2594x2244/fit-in/500x500/projects-files/69/6997/699729/bd445bb5-a0e9-406e-ac9f-59a3445a9ee0.jpg" alt="pCustomer" className='widgetLgImg' srcset="" />
                            <span className="widgetLgName">Jack Daniels</span>
                        </td>
                        <td className="widgetLgDate">2 jun 2021</td>
                        <td className="widgetLgAmount"> $220.00</td>
                        <td className="widgetLgStatus"> <Button type="Approved" /> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
