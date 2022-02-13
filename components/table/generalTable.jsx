import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Table, Th, Thead } from 'reactable';


const revenueTableData = [
    { date: 'г. Москва', impressions: 8403, clicks: 820, sales: 334, profit: 1203, profit2: 23423 },
];

export default function GeneralTable() {
    return (
        <>
            <br/>
            <br/>
            <br/>
<Card>
                        <Table
                            className="table"
                            data={revenueTableData}
                            sortable={true}>
                            <Thead>
                                <Th column="date">
                                    <span>Регион</span>
                                </Th>
                                <Th column="impressions">
                                    <span>Количество просроченных кредитов</span>
                                </Th>
                                <Th column="clicks">
                                    <span>Средняя кредитная ставка</span>
                                </Th>
                                <Th column="sales">
                                    <span>Банкротства</span>
                                </Th>
                                <Th column="profit">
                                    <span>Население региона</span>
                                </Th>
                                <Th column="profit2">
                                    <span>Средняя зарплата по региону</span>
                                </Th>
                            </Thead>
                        </Table>
</Card>
            <br/>
            <br/>
            <br/>
            <br/>
            </>
    );
}
