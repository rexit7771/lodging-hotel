export default function DeleteLodging() {
  return (
    <form className="bg-navy">
      <label className="text-white text-lg">
        Are You Sure you want to delete this lodging?
      </label>
      <div className="grid grid-cols-2 gap-0 w-1/4">
        <div className="">
          <button>Yes</button>
        </div>
        <div className="">
          <button>No</button>
        </div>
      </div>
    </form>
  );
}
