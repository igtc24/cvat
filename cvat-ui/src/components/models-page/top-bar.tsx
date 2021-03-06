// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { Row, Col } from 'antd/lib/grid';
import Text from 'antd/lib/typography/Text';

export default function TopBarComponent(): JSX.Element {
    return (
        <Row type='flex' justify='center' align='middle'>
            <Col md={11} lg={9} xl={8} xxl={7}>
                <Text className='cvat-title'>Models</Text>
            </Col>
        </Row>
    );
}
