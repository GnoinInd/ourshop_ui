import React from 'react';
import '../css/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="mycontainer footer-flex">
                <div className="mycol col-4 footer-row">
                    <h1> Shop Non-Stop on freeshop</h1>
                    <p>Trusted by more than 1 Crore Indians
                        Cash on Delivery | Free Delivery</p>
                </div>
                <div className="mycol col-4 footer-row">
                    <ul className="footer-contact">
                        <li>
                            Contact
                        </li>
                    </ul>
                    <p>
                        Freeshop Technologies Private Limited,
                        CIN: U74900KA2015PTC082263
                        06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                        E-mail address: query@meesho.com
                        © 2015-2023 freeshop.com
                    </p>
                </div>
                <div className="mycol col-4 footer-row">
                    <ul className="footer-contact-list">
                        <li>Careers</li>
                        <li>Become a supplier</li>
                        <li>Hall of Fame</li>
                        <li>Sitemap </li>
                        <li>Legal and Policies</li>

                    </ul>
                </div>
                <div className="mycol col-4 footer-row">
                    <h3>Reach out to us</h3>
                    <div class="footer-link-img">
                        <div class="facebook">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAMAAAD1LOYpAAAAnFBMVEX///8Zd/P7/v4AcPL///2CrPEAYenv+fkAYOr1/P0advQAbfDA1vYAZO8AcfF2o+nQ3/b1+Pzd6/dLjuste+u5z/CUuemIr+yFru9YlOawyO6sze5YjuUAZ+6FruYYePDo8vigvvAAYuI5guVJh99rmOqPtu07he4te+Ezf+ukw+17qedlnOnB2u7G1+5Jie0Pb+EAV+PV6fwASeMlPqELAAAEZklEQVR4nO2cfV+bMBDHaXKukrigWPpIW7TTbep8fP/vbQmoo9ASAyTk89n9/EcKHN9empAc3AUBCoVCoVAoFAqFQqGOC3o0BT0aq5nuxTjkkFDazjegtP3vg9IGfO49eAAUh/Tz/ZURYkUdEaFoB4UXL6fzEwua3y5jUvJoK0zZwGSVTpjgnNP+xdkkXeW+bEmY/5hXu7VgI1tijK53ifJEG8S8l4QbLkZsaw1RSdBN2K5nK8Rswa3SKTeyEaOLrFVLKx9aJ3wXX4StvAiwcUQoGWfEnFAiLrm9flIRE0kbL5Kdxa5cldiZulH9MlZrZ4BS68Rw4FHdOaUjdw3NaErMBh55bDxxxTfKXTGJjd24lCfaHbMrjOYdZipc8RUSU9OGJnPqFpHODBGBnLhGnBOjm+AQiCfErLcg4mFEE0JE9ASRjYSgPBfNFz66OYkzRJb/CTqa7H7cRPe30yul2/voJt1tGyFdenEr+M958hpWbY4vG+9X7hAZW/9aZcX6tmwwgAtfEMXvu48wUL6s+wzbwEXqAaL8rfE0ztft9VHYD0Tpw/uLY6EPTxp6vSFwbEXsByJ/IOAxovwd0jRrmPENjygl/jRN+HxA5FFjzHl4RMaesyMxOPAE8diUtIgVgw93F7Z9PNKT4T1QPDziU3YQ8f0WKDU4Io2OGiPjcZZl42xoRH53wAgEWXJ/+XxdqHlOax9xXR8UJeHqknPBcsk+PzDit6w+boMK5n81vOYAcVxHvCoHopmG1QUiVCzA67NJfHIQxAejaL59xNMKomx2IycO4MUAwm9GBgboLhCeIiIiIiIi/t+I4Blibd5SvQGCRGSNZ9hGVNfkZb1UvAhB+FLeTyltntNa8KJYnJWVkCoiSfYOOFs2f2MLXqQRlFQLKUJN8bVrRBEZmQTQvCVgo6ENEYPb5hnu8IhBsGh+wD08IpCJ40HH3ItxI6AXiI+asdsDxDvNuxYeIM69RwxvvEeMn7xHPG9+1OsD4pnuzSQX9+jaNKK0B/ajZM68WD2lhvjxifov0k0/bXjx4XxP1UcaQMp7X3e6GFT/iGxLv5f1tr+8kj4cv5X3a1+Sc78ChMGXV1rE4VeAiIiIiIiIiIiIiIiIiIiIiNgRMfAeEfxHHKqhzRJe/Ec0Tg/rjChmZllDsqUNk+y6I04Nc6QBlmbZnt0QmcrtNSRUCZ9GjJ29qBI+zRAhaM5a6BmR0bRFmQ+z5OOuXlwbtnN+CbMU7o6I5incuRJniKxlInxgVE6gmxf5pmX1DZOiDJ0Q+U3LogyBKm3BmPbdkA6IufURXWTVBw5fZVQFQkQ+9OgZWyGyImlwE7YjLB5LQKLKrFjzovRgpzIrRSoaWS0mQmhL1bzUXpoOX7TFaoSYLJL32UOX6kSgSv7MdOV7orDywADCSHfObLqMO4CVr6YuqC+CVHt6pTuBQF/lp4rcTa2teoaB/uL9Fd+CAwS1i1UOOZpst3eGxQJhKBQKhUKhUCgUCoWq6C/BAmvk5utNtgAAAABJRU5ErkJggg==" />

                        </div>
                        <div class="youtube">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAb1BMVEX/////AAD/9/f/R0f/0dH/2Nj/39//8vL/4+P/+vr/7+//zc3/sbH/6+v/1NT/VFT/vLz/tbX/lZX/a2v/Ly//xMT/HR3/YWH/PDz/Cwv/qqr/gID/TEz/Fhb/XV3/Jib/m5v/c3P/i4v/oaH/eXmB5zGIAAACAElEQVRoge2Z2W7CMBBF7ewr2SEkUCDw/99YaKnUjfgODHIrzXngCXKQPfYsUUoQBEEQBEEQBEEQ/iuxk+RRFPj+wvO8ND1/LHw/iPIkdHhFTtBlQz02Rb/UCOt2szpNx6z08gesZbOFbDfop/Q+bfuI9eru6N7pce2Fmuqtebxkc8fl1Zq02jEWwxC7mCAe+LxaVwTxilPc4N6EcaW1bkNYHHF6tY5gcckrxuOa7RC/s4fFDa8Yjy7WoNZ6hXrjgldcoFdI2BseFLyQxD16nvLd/IPcWHWUnLlDi4JobRBfypyj4UufWKMHOTA86E2s8hNs9kGxD4mV8tAg5BYrVRmigSj2YLGKoUsOLfpSXHzeauC2QS9rU93jfi3eF65JXIJiU3Jyv3cNlSF/o+KKKlbO/FajxU9GFhu2OnuiOJlLpaj4jqXez/4AXWpycJnarCdFtb8xfP855zgE6iT05qJcmfObe8UDxXiSAHto7uy0QCsgVIwVAskIarUOQLG10sdasWetvGUv6EGvvRaGu2k7wGJrbaq1xtzaKMLa8MXauIl3wIZWXBc4R4pb0uyecYhKmSgqxqM80bxs5pHqVbTMd4OWuM4f6hHru2+wbdB6+jeitBqO0+HFBf/Dsi+asR6yLuB+EZUk+c8XXlGeOJRBvCAIgiAIgiAIgiD8LV4BtmYhrdcasyQAAAAASUVORK5CYII=" />
                        </div>
                        <div class="instagram">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr330Yry9Omu2U4y3nf_cNDa_DDh6LGHZuhec0JC4law&s" />
                        </div>
                        <div class="linkdin">
                            <img
                                src="data:image/png;base64,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" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;