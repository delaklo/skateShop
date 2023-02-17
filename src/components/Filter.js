import Form from 'react-bootstrap/Form';

import './shopElements.scss'

function Filter(props) {
    return (
        <Form id='shop__checkbox'>
          {props.categories.map((name) => (
            <div key={`default-${name}`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                onChange={props.onFilterChange}
                id={name}
                label={name}
                value={name}
              />

            </div>
          ))}
        </Form>
      );
    }

export default Filter;