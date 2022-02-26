const { UserInputError } = require('apollo-server-express');
const User = require('./models/User');
const Listing = require('./models/Listing');
const Booking = require('./models/Booking')

exports.resolvers = {
    Query: {
        getUsers: async (parent, args) => {
            return await User.find({})
        },
        getListings: async (parent, args) => {
            return await Listing.find({})
        },
        getBookings: async (parent, args) => {
            return await Booking.find({})
        },
        getListingByUsername: async (parent, args) => {
            return await Listing.find({"listingUsername" : args.listingUsername})
        },
        getListingByCity: async (parent, args) => {
            return await Listing.find({"city" : args.city})
        },
        getListingByPostalCode: async (parent, args) => {
            return await Listing.find({"postal_code" : args.postal_code})
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)

            let newUser = User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })

            return newUser.save()
        },

        login: async (parent, args) => {
            const user = await User.findOne({ username })

            if(!user){
                errors.general = 'User not found'
                throw new UserInputError('User not found', { errors })
            }
            return {username: args.username}
        },
        
        addListing: async (parent, args) => {
            console.log(args)

            let newListing = Listing({
                listing_id : args.listing_id,
                listing_title : args.listing_title,
                description : args.description,
                street : args.street,
                city : args.city,
                postal_code : args.postal_code,
                price : args.price,
                listingEmail : args.listingEmail,
                listingUsername: args.listingUsername,
            })

                return newListing.save()
        },

        addBooking: async (parent, args) => {
            console.log(args)

            let newBooking = Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                bookingUsername: args.bookingUsername,
            })
                return newBooking.save()
        }
    }
}