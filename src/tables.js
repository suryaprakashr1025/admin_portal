import React from 'react'

function Tables() {
  return (
    <div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
        <div class="card-body">
            <div class="table-responsive">
                <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row"><div class="col-sm-12 col-md-6">
                       
                            
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Tables;