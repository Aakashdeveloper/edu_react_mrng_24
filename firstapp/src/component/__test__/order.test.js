import React from 'react';
import {render,screen} from '@testing-library/react';
import Orders from '../order';


describe('Order Component', () => { 

    it('Display correct info',() => {
        const {getByText} = render(<Orders />);
        const sampleOrder = {
            order_name:"Sample Order",
            category:"Sample Category",
            price:140
        }

        expect(screen.getByText(sampleOrder.order_name)).toBeInTheDocument()
        expect(screen.getByText(sampleOrder.category)).toBeInTheDocument()
        expect(screen.getByText(sampleOrder.price.toString())).toBeInTheDocument()
    })
 })


// import React from 'react';
// import {shallow} from 'enzyme';
// import Orders from '../order';
// import Enzyme from 'enzyme'
// // import Apdator from 'enzyme-adapter-react-18'
// // Enzyme.configure({adpater: new Adapter()})

// describe('Order Component', () => { 
//     it('render without Crashing',() => {
//         shallow(<Orders/>)
//     }) 

//     it('Display correct info',() => {
//         const wrapper = shallow(<Orders />)
//         wrapper.setState({
//             data:{
//                 orders:{
//                     order_name:"Sample Order",
//                     category:"Sample Category",
//                     price:140
//                 }
//             }
//         });

//         expect(wrapper.find('h2').at(0).text()).toBe('Sample Order')
//         expect(wrapper.find('h2').at(1).text()).toBe('Sample Category')
//         expect(wrapper.find('h2').at(0).text()).toBe(140)
//     })
//  })