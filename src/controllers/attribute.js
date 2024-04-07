import Attribute from "../models/attribute.js";
export const createAttribute = async (data) => {
    try {
        const attribute = new Attribute({
            values : data
        });
        const newAttribute = await attribute.save();
        return newAttribute;
    } catch (error) {
        return error.message;
    }
};
export const updateAttribute = async (data) => {
    try {
        const attribute = new Attribute({
            values : data
        });
        const updateAttribute = await attribute.save();
        return updateAttribute;
    } catch (error) {
        return error.message;
    }
};
export const getAllAttributes = async (req, res) => {
    try {
        const attributes = await Attribute.find().populate("values");
        res.json(attributes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getAttributeById = async (req, res) => {
    try {
        const attribute = await Attribute.findById(req.params.id).populate("values");
        if (!attribute) {
            return res.status(404).json({ message: "Attribute not found" });
        }
        res.json(attribute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteAttribute = async (id) => {
    try {
        await Attribute.findOneAndDelete(id);
    } catch (error) {
        return error.message;
    }
};