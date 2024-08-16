'use client'

import PropTypes from 'prop-types';

export default function Imagebanner({data}) {
    return(
        <div>{data}</div>
    )
}

Imagebanner.PropTypes = {
    data: PropTypes.string.isRequired
}
