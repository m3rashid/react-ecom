import Item from "../../../models/item";
import Category from "../../../models/category";
import { ApolloError } from "apollo-server";

const Query = {
  items: async (/* parent, args, context */) => {
    try {
      const items = await Item.find();
      return items;
    } catch (err) {
      throw new ApolloError(err);
    }
  },

  item: async (_, { id }, __) => {
    try {
      const item = await Item.findById(id);
      return item;
    } catch (err) {
      throw new ApolloError(err);
    }
  },

  itemByCategory: async (_, { category }, __) => {
    try {
      const items = await Item.find({ category: category });
      return items;
    } catch (err) {
      throw new ApolloError(err);
    }
  },
};

export default Query;
