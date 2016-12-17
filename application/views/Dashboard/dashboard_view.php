<p>
    <a href="<?php echo site_url('DashboardController/add') ?>" class="btn btn-primary"><span class="IL_AD" id="IL_AD8">Add New</span></a>
</p>
<div class="table-responsive">
    <table class="table table-bordered table-hover table-striped">
        <caption>List Data</caption>
        <thead>
        <tr>
            <th width="80px">ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <?php
        if ($data_get == NULL) {
            ?>
            <div class="alert alert-info" role="alert">Data not available!</div>
            <?php
        } else {
        foreach ($data_get as $row) {
        ?>
        <tr>
            <td><?php echo $row->studentId; ?></td>
            <td><?php echo $row->firstname; ?></td>
            <td><?php echo $row->lastname; ?></td>
            <td><?php echo $row->age; ?></td>
            <td><?php echo $row->address; ?></td>
            <td>
                <a href="<?php echo site_url('DashboardController/edit/' . $row->studentId); ?>"
                   class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-pencil"
                                                        aria-hidden="true"></span></a>
                <a href="<?php echo site_url('DashboardController/delete/' . $row->studentId); ?>"
                   class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
            </td>
            <?php
            }
            }
            ?>
        </tr>
        </tbody>
    </table>
</div>