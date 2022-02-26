const { gql } = require('apollo-server-express');
const Listing = require('./models/Listing')
const User = require('./models/User')
const { validateLoginInput } = require('./util/validators')

exports.typeDefs = gql `
    type User {
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        listingEmail: String!
        listingUsername: String!
    }

    type Booking {
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        bookingUsername: String!
    }

    type Query {
        getUsers: [User]
        getListings: [Listing]
        getBookings: [Booking]
        getListingByUsername(listingUsername: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getListingByPostalCode(postal_code: String!): [Listing]
    }

    type Mutation {
        addUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ): User

        login(
            username: String!
            password: String!
        ): User

        addListing (
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            listingEmail: String!
            listingUsername: String!
        ): Listing

        addBooking (
            listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            bookingUsername: String!
        ): Booking
    }
`