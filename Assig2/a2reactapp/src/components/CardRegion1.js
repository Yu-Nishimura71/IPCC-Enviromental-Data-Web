
const CardRegoin1 = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div class="card mb-1 text-white">
            <img class="card-img-top" src="" alt="Region image" style="object-fit: cover; height: 200px">
            <div class="card-img-overlay">
                <h5 class="card-title" style="padding: 5px 10px; border-radius: 5px;">@Html.DisplayFor(modelItem => item.RegionName)</h5>
            </div>
            <div class="card-footer">
                <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <a asp-action="Index" asp-controller="Countries" asp-route-RegionId="@item.RegionId" class="nav-link active">View Countries</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardRegoin1