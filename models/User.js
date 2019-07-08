const { model, Schema } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// We add steroids to our model, because of this, we don't have to add the "password" field to our model
userSchema.plugin(passportLocalMongoose, {
  // PLM by default register users with "username" and "password", we need to configure a different field
  usernameField: 'email'
})

module.exports = model('User', userSchema)
