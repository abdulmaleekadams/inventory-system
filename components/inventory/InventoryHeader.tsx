import Link from "next/link";
import {
  Plus,
  List,
  LayoutGrid,
  MoreHorizontal,
  HelpCircle,
} from "lucide-react";

const InventoryHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white px-5 py-4">
      <div>
        <button className="text-2xl">All Items</button>
      </div>

      <div className="flex gap-x-3 items-center">
        {/* New */}
        <Link
          href={"items/new"}
          className="p-2 mr-4 bg-blue-500 rounded-lg flex items-center text-white gap-x-2"
        >
          <Plus className="w-4 h-4" />
          New
        </Link>

        {/* Layout */}
        <div className="flex border border-slate-400 rounded-lg">
          <button
            type="button"
            aria-label="List Layout"
            className="bg-slate-300 p-2 border-r border-slate-400 rounded-l-lg"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Grid Layout"
            className="bg-slate-200 p-2 rounded-r-lg"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

        {/* More */}
        <div className="relative">
          <button type="button" aria-label="Menu" className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <button
          type="button"
          aria-label="Help"
          className="bg-yellow-500 p-2 rounded-lg"
        >
          <HelpCircle className="text-white" />
        </button>

        {/* Help */}
      </div>
    </div>
  );
};

export default InventoryHeader;
