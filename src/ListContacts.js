import React, {Component} from 'react'
import PropTypes from 'prop-types'



class ListContacts extends Component{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query:''
    }

    updateQuery = (query)=>{
        this.setState(()=>({
            query: query.trim()
        }))
    }

    clearQuery = ()=>{
        this.updateQuery('')
    }
    render(){
        const {query} = this.state
        const {contacts, onDeleteContact} = this.props
        const showingContacts = query === ''? contacts: contacts.filter((c)=>{
           return c.name.toLowerCase().includes(query.toLocaleLowerCase())
        })
        return(
            <div className = 'list-contacts'>
                
                <div className = 'list-contacts-top'>
                    <input 
                    type="text" 
                    className = 'search-contacts'
                    placeholder = 'Search Contacts' 
                    value = {query}
                    onChange = {(event)=>{
                        this.updateQuery(event.target.value)
                    }} />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className = 'showing-contacts'>
                        <span>
                            Now Showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick = {this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className = 'contact-list'>
                {showingContacts.map((contact)=>{
                    return(
                        <li className = 'contact-list-item' key = {contact.id}>
                            <div 
                            className = 'contact-avatar' 
                            style = {{
                                backgroundImage:`url(${contact.avatarURL})`
                            }}>

                            </div>

                            <div className = 'contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>

                            <button 
                            onClick = {()=>{
                                // console.log(props.onDeleteContact);
                               onDeleteContact(contact)
                            }}
                            className = 'contact-remove'
                            >Remove</button>
                        </li>
                    )
                })}
            </ol>
            </div>
            
        )
    }
}


export default ListContacts