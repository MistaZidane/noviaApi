/*
 * Author: Ntokungwia Zidane
 * Contributors: 
 *
 * Project: Bato Store API
 * This is used to boot up our API
 * Created on Tuesday Jan 18 2022

 */


import mongoose from "mongoose";
import paginator from "mongoose-paginate-v2";

const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    name: { type: String, unique: true, require: true },
    // domain: { type: String, unique: true, require: true },
    ownerId: { type: String, require: true },
    description: { type: String, default: '' },
    images: { type: Array, default: [] },
    slug: { type: String, unique: true, require: true },
    deliveryNote: { type: String, default: '' },
    metadata: { type: String, default: '' },
    price: Number,
    quantity: Number,
    quantitySold: Number,
    type: { type: String, default: '' },
    splitCode: { type: String, default: '' },
    unlimited: { type: Boolean, default: true },
    variantOptions: [{ type: Schema.Types.ObjectId, ref: "variants" }],
    variantProducts: [{ type: Schema.Types.ObjectId, ref: "variantProducts" }],
    notificationEmails: Array,
    minimumOrder: { type: Number, default: 1 },
    maximumOrder: { type: Number, default: null },
    files: Array,
    productCode: { type: String, default: '' },
    currency: { type: String, default: 'XAF' },
    redirectUrl: { type: String, default: '' },
    successMessage: { type: String, default: '' },
    active: { type: Boolean, default: true },
    status: { type: Boolean, default: true },
    shippable: { type: Boolean, default: true },
    primaryColor: { type: String, default: '#ffffff' },
    duplicatedNumber: { type: Number, default: 0 },
    duplicated: { type: Boolean, default: false }

});

CourseSchema.index({ name: 'text', slug: 'text' });
CourseSchema.plugin(paginator);
export default mongoose.model('courses', CourseSchema);